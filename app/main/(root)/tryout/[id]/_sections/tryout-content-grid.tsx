import { Button } from '@/app/_components/button';
import React from 'react';
import { HiCloud, HiDocumentText } from 'react-icons/hi';

type TryoutContentGridProps = {
  isCompleted: boolean;
  totalQuestions: number;
  targetScore: {
    safe: number;
    maximum: number;
    breakdown: {
      TWK: number;
      TIU: number;
      TKP: number;
    };
  };
  materials: Array<{
    id: string;
    title: string;
    type: 'PDF';
    duration: string;
  }>;
  userScore?: number
  correctAnswers?: number
}


export default function TryoutContentGrid(props: TryoutContentGridProps) {
  return (
    <section className='px-6 sm:px-8 lg:px-12 my-6'>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Target Skor */}
        <div className="min-w-80">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Target Skor</h3>

          <div className="space-y-2">
            <div>
              <p className="mb-2">Target Skor Aman:</p>
              <p className="text-xl font-bold text-salmon-normal">{props.targetScore.safe} dari {props.targetScore.maximum}</p>
            </div>

            <div>
              <p className="mb-2">Skor Maksimum:</p>
              <ul className="space-y-1">
                <li>• <strong>TWK:</strong> {props.targetScore.breakdown.TWK}</li>
                <li>• <strong>TIU:</strong> {props.targetScore.breakdown.TIU}</li>
                <li>• <strong>TKP:</strong> {props.targetScore.breakdown.TKP}</li>
              </ul>
            </div>

            {props.isCompleted && (
              <div className='mt-4'>
                <p className="mb-2">Skor Kamu:</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-green-600">
                    {props.isCompleted ? props.userScore : 0}
                  </span>
                  <span className="text-sm">
                    ({props.isCompleted ? props.correctAnswers : 0}/{props.totalQuestions} benar)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Materi Terkait */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Materi Terkait</h3>
            <button className="text-salmon-normal">Lainnya</button>
          </div>

          <div className="space-y-3">
            {props.materials.map((material) => (
              <div key={material.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <HiDocumentText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{material.title}</p>
                    <div className="flex items-center gap-3 text-sm text-salmon-normal">
                      <span className="flex items-center gap-1">
                        <HiDocumentText className="w-3 h-3" />
                        {material.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCloud className="w-3 h-3" />
                        Durasi baca: {material.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className='rounded-full'>
                  Lihat Materi
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}