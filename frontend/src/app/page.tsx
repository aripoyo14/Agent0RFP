import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { CareerInfo } from "@/components/profile/CareerInfo";
import { Summary } from "@/components/profile/Summary";
import { ActivityInfo } from "@/components/profile/ActivityInfo";
import { ContactInfo } from "@/components/profile/ContactInfo";
import { StaffList } from "@/components/profile/StaffList";
import { RelatedPeople } from "@/components/profile/RelatedPeople";
// データ切り替え用: 以下のどちらかをコメントアウトして使用
import { sampleTalentProfile } from "@/data"; // フルデータ版
//import { sampleTalentProfile } from "@/data/index_empty"; // 空データ版（テスト用）

export default function TalentProfilePage() {
  const profile = sampleTalentProfile;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-32 lg:h-40">
        <ProfileHeader name={profile.name} skillTags={profile.skillTags} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 p-4 lg:p-6 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-10rem)]">
        {/* Left Column - Widest */}
        <div className="flex flex-col gap-3 lg:gap-4 lg:h-full">
          <div className="h-auto lg:h-[40%]">
            <CareerInfo
              currentInfo={profile.currentInfo}
              pastBusinessCards={profile.pastBusinessCards}
            />
          </div>
          <div className="h-auto lg:h-[60%] lg:flex-1">
            <Summary records={profile.interviewRecords} />
          </div>
        </div>

        {/* Middle Column - Activity Information */}
        <div className="flex flex-col gap-3 lg:gap-4 lg:h-full">
          <div className="h-auto lg:h-full">
            <ActivityInfo activities={profile.activities} />
          </div>
        </div>

        {/* Right Column - Narrowest */}
        <div className="flex flex-col gap-3 lg:gap-4 lg:h-full">
          <div className="h-auto lg:h-[20%]">
            <ContactInfo
              email={profile.contactInfo.email}
              phone={profile.contactInfo.phone}
            />
          </div>
          <div className="h-auto lg:h-[40%]">
            <StaffList staff={profile.contactStaff} />
          </div>
          <div className="h-auto lg:h-[40%]">
            <RelatedPeople people={profile.relatedPeople} />
          </div>
        </div>
      </div>
    </div>
  );
}
