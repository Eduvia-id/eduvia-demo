import React from 'react';
import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from './table';
import Badge from '../badge';
import { Button } from '@/app/_components/button';
import { HiEye, HiTrash, HiUpload } from 'react-icons/hi';
import { IconButton } from '../icon-button';
import { HiPencilSquare } from 'react-icons/hi2';

export interface CoursePackage {
  id: number;
  nama: string;
  jenis: 'SKD' | 'SKB';
  harga: number;
  durasi: string;
  status: 'Aktif' | 'Nonaktif';
  materi?: string;
}

interface CoursePackageTableProps {
  data: CoursePackage[];
  className?: string;
  emptyMessage?: string;
}

export const formatCurrencySimple = (amount: number): string => {
  return `Rp${amount.toLocaleString('id-ID')}`;
};

export const CoursePackageTable: React.FC<CoursePackageTableProps> = ({
  data,
  emptyMessage = "Tidak ada data yang ditemukan",
}) => {
  if (data.length === 0) {
    return (
      <div className="rounded-lg bg-white p-12 text-center shadow">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader className="bg-blue-600 text-white">
        <TableRow hover={false}>
          <TableHeadCell>No</TableHeadCell>
          <TableHeadCell>Nama Paket</TableHeadCell>
          <TableHeadCell>Harga</TableHeadCell>
          <TableHeadCell>Durasi</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Materi</TableHeadCell>
          <TableHeadCell>Aksi</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{data.nama}</TableCell>
            <TableCell>{formatCurrencySimple(data.harga)}</TableCell>
            <TableCell>{data.durasi}</TableCell>
            <TableCell>
              <Badge status={data.status} type={data.status === "Aktif" ? 'success' : 'danger'} />
            </TableCell>
            <TableCell>
              {data.materi === "Upload" ?
                <Button size='sm' color='secondary'>
                  <HiUpload />
                  {data.materi}
                </Button>
                :
                <Button size='sm'>
                  <HiEye />
                  {data.materi}
                </Button>
              }
            </TableCell>
            <TableCell className='space-x-1'>
              <IconButton icon={<HiPencilSquare />} href={`/paket/${data.id}`} />
              <IconButton icon={<HiTrash />} variant='danger' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

