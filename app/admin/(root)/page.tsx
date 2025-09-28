import React from "react";
import { HiBanknotes, HiUsers } from "react-icons/hi2";
import PieChart, { PieData } from "../_components/charts/pie-chart";
import { HiBookOpen, HiChevronRight, HiClipboardList } from "react-icons/hi";

const packageData: PieData[] = [
  { name: "SKD Full Paket", value: 923, color: "#3B82F6" },
  { name: "SKB Guru", value: 315, color: "#F59E0B" },
  { name: "SKB Tenaga Kesehatan", value: 185, color: "#EF4444" },
  { name: "SKD Siswa", value: 115, color: "#10B981" },
];

const activityData: PieData[] = [
  { name: "Aktif", value: 1320, color: "#3B82F6" },
  { name: "Belum Aktif", value: 180, color: "#F59E0B" },
  { name: "Kadaluarsa", value: 38, color: "#EF4444" },
];


export default function Dashboard() {

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            title: "Siswa Aktif",
            value: "1.530",
            icon: HiUsers,
          },
          {
            title: "Transaksi Bulan Ini",
            value: "Rp 49.230.000",
            icon: HiBanknotes,
          },
          {
            title: "Paket Paling Laris",
            value: "SKD Full Paket",
            icon: HiBookOpen,
          },
          {
            title: "Tryout Dikerjakan",
            value: "214 siswa",
            icon: HiClipboardList,
          },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-lg lg:text-xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`bg-sapphire-normal p-3 rounded-lg flex-shrink-0 ml-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Statistics */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Statistik Singkat</h2>
          <HiChevronRight className="h-8 w-8 text-sapphire-normal" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <PieChart data={packageData} title="Paket Bimbel" />
          <PieChart data={activityData} title="Status Aktivitas Paket" />
        </div>
      </div>
    </div>
  );
}
