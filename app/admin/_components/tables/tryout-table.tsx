import React from 'react';
import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from './table';
import Badge from '../badge';
import { Button } from '@/app/_components/button';
import { HiEye, HiTrash } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi2';
import { IconButton } from '../icon-button';
import { HiPencilSquare } from 'react-icons/hi2';

export interface TryoutData {
  id: number;
  namaPaket: string;
  jenis: 'SKD' | 'SKB';
  durasi: string;
  soal: string;
  status: 'Aktif' | 'Nonaktif';
}

interface TryoutTableProps {
  data: TryoutData[];
  className?: string;
  emptyMessage?: string;
}

export default function TryoutTable({
  data,
  emptyMessage = "Tidak ada data yang ditemukan",
}: TryoutTableProps) {
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
          <TableHeadCell>Nama Tryout</TableHeadCell>
          <TableHeadCell>Jenis</TableHeadCell>
          <TableHeadCell>Durasi</TableHeadCell>
          <TableHeadCell>Soal</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Aksi</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.namaPaket}</TableCell>
            <TableCell>
              <Badge
                status={item.jenis}
                type={item.jenis === "SKD" ? 'info' : 'warning'}
              />
            </TableCell>
            <TableCell>{item.durasi}</TableCell>
            <TableCell>
              {item.soal === "Input Soal" ? (
                <Button size='sm' color='secondary'>
                  <HiPlus className="h-4 w-4" />
                  {item.soal}
                </Button>
              ) : (
                <Button size='sm'>
                  <HiEye className="h-4 w-4" />
                  {item.soal}
                </Button>
              )}
            </TableCell>
            <TableCell>
              <Badge
                status={item.status}
                type={item.status === "Aktif" ? 'success' : 'danger'}
              />
            </TableCell>
            <TableCell className='space-x-1'>
              <IconButton
                icon={<HiPencilSquare />}
                href={`/tryout/${item.id}`}
                title="Edit Tryout"
              />
              <IconButton
                icon={<HiTrash />}
                variant='danger'
                title="Hapus Tryout"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
