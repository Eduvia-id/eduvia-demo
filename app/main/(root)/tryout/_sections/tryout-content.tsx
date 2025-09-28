'use client';

import TryoutCard, { Tryout } from '@/app/main/_components/cards/tryout-card';
import { useQueryState } from 'nuqs'

type TryoutGridProps = {
  tryoutData: Tryout[]
}

export default function TryoutGrid({ tryoutData }: TryoutGridProps) {
  const [searchQuery] = useQueryState('search', { defaultValue: '' })
  const [activeTab] = useQueryState('tab', { defaultValue: 'semua' })

  const pendingTryouts = tryoutData.filter(item => item.status === 'available')
  const completedTryouts = tryoutData.filter(item => item.status === 'completed')

  return (
    <section className="px-6 sm:px-8 lg:px-12 my-8 space-y-8">
      {/* Belum Dikerjakan Section */}
      {(activeTab === 'semua' || activeTab === 'belum-dikerjakan') && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Belum Dikerjakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pendingTryouts.filter(item =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((tryout, index) => (
              <TryoutCard
                key={tryout.id}
                tryout={tryout}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} />
            ))}
          </div>
        </div>
      )}

      {/* Tryout Selesai Section */}
      {(activeTab === 'semua' || activeTab === 'selesai') && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tryout Selesai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {completedTryouts.filter(item =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((tryout, index) => (
              <TryoutCard
                key={tryout.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                tryout={tryout}
              />
            ))}
          </div>
        </div>
      )}


    </section>
  )
}