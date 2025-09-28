import React, { ReactNode } from 'react';

// Types
export interface CoursePackage {
  id: number;
  nama: string;
  jenis: 'SKD' | 'SKB';
  harga: number;
  durasi: string;
  status: 'Aktif' | 'Nonaktif';
  materi?: string;
}

// Base Table Component
interface TableProps {
  className?: string;
  children: ReactNode;
}

export const Table: React.FC<TableProps> = ({ className = "", children }) => {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          {children}
        </table>
      </div>
    </div>
  );
};

// Table Header Component
interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = "bg-sapphire-normal text-white"
}) => {
  return (
    <thead className={className}>
      {children}
    </thead>
  );
};

// Table Body Component
interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className = "divide-y divide-gray-200"
}) => {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  );
};

// Table Row Component
interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className = "",
  onClick,
  hover = true
}) => {
  return (
    <tr
      className={`
        ${hover ? 'hover:bg-gray-50' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

// Table Head Cell Component
interface TableHeadCellProps {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  className = "",
  align = 'left'
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <th className={`px-4 py-3 text-sm font-medium ${alignClass[align]} ${className}`}>
      {children}
    </th>
  );
};

// Table Data Cell Component
interface TableCellProps {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className = "",
  align = 'left'
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <td className={`px-4 py-3 text-sm text-gray-900 ${alignClass[align]} ${className}`}>
      {children}
    </td>
  );
};

// Empty State Component
interface TableEmptyStateProps {
  message?: string;
  className?: string;
  children?: ReactNode;
}

export const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  message = "Tidak ada data yang ditemukan",
  className = "",
  children
}) => {
  return (
    <div className={`rounded-lg bg-white p-12 text-center shadow ${className}`}>
      {children || <p className="text-gray-500">{message}</p>}
    </div>
  );
};

export default function TableExample() {
  return (
    <div className="space-y-8">
      {/* Using individual components for full customization */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Table Example</h3>
        <Table>
          <TableHeader className="bg-blue-600 text-white">
            <TableRow hover={false}>
              <TableHeadCell>Custom Header 1</TableHeadCell>
              <TableHeadCell align="center">Custom Header 2</TableHeadCell>
              <TableHeadCell align="right">Custom Header 3</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow onClick={() => console.log('Custom row clicked')}>
              <TableCell>Custom Data 1</TableCell>
              <TableCell align="center">Custom Data 2</TableCell>
              <TableCell align="right">Custom Data 3</TableCell>
            </TableRow>
            <TableRow className="bg-yellow-50">
              <TableCell>Highlighted Row</TableCell>
              <TableCell align="center">Center Aligned</TableCell>
              <TableCell align="right">Right Aligned</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}


