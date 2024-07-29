import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { axios_instance } from '@/api/axios'
import useAuth from '@/hooks/useAuth'
import { Order } from '@/lib/types'
import { DataTableColumnHeader } from './DataTable/ColumnHeader'
import { ColumnDef, getCoreRowModel, flexRender, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

const emptyData: any[]= []

const RecentOrders = () => {
    const {auth} = useAuth()

    const orders = useQuery<Order[]>({
        queryKey: ["summary", "orders"],
        queryFn: async() => await axios_instance.get(`/recent-orders`, {
            headers: {
                'Authorization': `Bearer ${auth?.backendTokens.accessToken}`
            }
        }).then(res => res.data)
    })

    const columns:ColumnDef<Order>[] =[{
        accessorKey: "id",
        header:({column})=>(<DataTableColumnHeader column={column} title='Order ID' />),
        cell:({row}) => <div>
            <Link to={`${row.original.id}`}>
                <span className='text-gray-400'>#</span>{row.original.id}
            </Link>
        </div>
    },{
        accessorKey: "createdAt",
        header:({column})=>(<DataTableColumnHeader column={column} title='Date' />),
        cell:({row}) => <div>
            {row.original.createdAt}
        </div>
    },{
        accessorKey: "product",
        header:({column})=>(<DataTableColumnHeader column={column} title='Product' />),
        cell:({row}) => <div>
            {row.original.product}
        </div>
    },{
        accessorKey: "amount",
        header:({column})=>(<DataTableColumnHeader column={column} title='Price' />),
        cell:({row}) => <div>
            {row.original.amount}
        </div>
    },{
        accessorKey: "recipient",
        header:({column})=>(<DataTableColumnHeader column={column} title='Recipient' />),
        cell:({row}) => <div>
            {row.original.recipient}
        </div>
    },{
        accessorKey: "account",
        header:({column})=>(<DataTableColumnHeader column={column} title='Account' />),
        cell:({row}) => <div>
            {row.original.account}
        </div>
    },{
        accessorKey: "status",
        header:({column})=>(<DataTableColumnHeader column={column} title='Status' />),
        cell:({row}) => <div>
            {row.original.status}
        </div>
    }]

    const table = useReactTable({
        data: orders.data || emptyData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        
    })

    return (
        <div className="my-8 border p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-3xl">Recent orders</h4>
                <Link to={'../orders'} className="bg-[rgb(255,221,102)] px-4 py-2 rounded-full">See all</Link>
            </div>
            <div className="w-full rounded-md border bg-white/75">
                <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </TableHead>
                            )
                        })}
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                            ))}
                        </TableRow>
                        ))
                    ) : (
                        <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
            </div>
    )
}

export default RecentOrders