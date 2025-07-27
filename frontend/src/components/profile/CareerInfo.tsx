"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CurrentInfo, PastBusinessCard } from "@/types";

interface CareerInfoProps {
  currentInfo: CurrentInfo;
  pastBusinessCards: PastBusinessCard[];
}

export function CareerInfo({
  currentInfo,
  pastBusinessCards,
}: CareerInfoProps) {
  const hasPastCareer = pastBusinessCards.length > 0;

  return (
    <Card className="profile-card h-full">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-symbols-outlined">business_center</span>
          経歴情報
        </CardTitle>
      </CardHeader>
      <CardContent className="relative h-full">
        {/* ↓↓↓ スクロール対応ラッパー追加 ↓↓↓ */}
        <div className="absolute inset-6 overflow-y-auto space-y-4 pr-4 custom-scrollbar">
          {/* 現在の情報 */}
          <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                最新
              </Badge>
              <div className="flex items-center gap-1 text-blue-600 text-xs">
                <span className="material-symbols-outlined text-xs">
                  calendar_today
                </span>
                <span>名刺取得日：{currentInfo.exchange_date}</span>
              </div>
            </div>
            <h3 className="text-gray-900 font-medium text-base mb-2">
              {currentInfo.company_name}
            </h3>
            <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
              <p className="mb-1">{currentInfo.current_department}</p>
              <p>{currentInfo.current_title}</p>
            </div>
          </div>

          {/* 過去の名刺情報（常に表示） */}
          {hasPastCareer &&
            pastBusinessCards.map((card, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white border-gray-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 font-medium text-base flex-1">
                    {card.company_name}
                  </h3>
                  <div className="flex items-center gap-1 text-blue-600 text-xs flex-shrink-0 ml-2">
                    <span className="material-symbols-outlined text-xs">
                      calendar_today
                    </span>
                    <span>取得日：{card.exchange_date}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
                  <p className="mb-1">{card.department_at_time}</p>
                  <p>{card.title_at_time}</p>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
