// "use client"
 
// import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
 
// const columnHelper = createColumnHelper()

// // Make some columns!
// const defaultColumns = [
//   // Display Column
//   columnHelper.display({
//     id: 'actions',
//     cell: props => <RowActions row={props.row} />,
//   }),
//   // Grouping Column
//   columnHelper.group({
//     header: 'Name',
//     footer: props => props.column.id,
//     columns: [
//       // Accessor Column
//       columnHelper.accessor('firstName', {
//         cell: info => info.getValue(),
//         footer: props => props.column.id,
//       }),
//       // Accessor Column
//       columnHelper.accessor(row => row.lastName, {
//         id: 'lastName',
//         cell: info => info.getValue(),
//         header: () => <span>Last Name</span>,
//         footer: props => props.column.id,
//       }),
//     ],
//   }),
//   // Grouping Column
//   columnHelper.group({
//     header: 'Info',
//     footer: props => props.column.id,
//     columns: [
//       // Accessor Column
//       columnHelper.accessor('age', {
//         header: () => 'Age',
//         footer: props => props.column.id,
//       }),
//       // Grouping Column
//       columnHelper.group({
//         header: 'More Info',
//         columns: [
//           // Accessor Column
//           columnHelper.accessor('visits', {
//             header: () => <span>Visits</span>,
//             footer: props => props.column.id,
//           }),
//           // Accessor Column
//           columnHelper.accessor('status', {
//             header: 'Status',
//             footer: props => props.column.id,
//           }),
//           // Accessor Column
//           columnHelper.accessor('progress', {
//             header: 'Profile Progress',
//             footer: props => props.column.id,
//           }),
//         ],
//       }),
//     ],
//   }),
// ]


export const columns='columns'