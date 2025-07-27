import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { CareerInfo } from "@/components/profile/CareerInfo";
import { Summary } from "@/components/profile/Summary";
import { ActivityInfo } from "@/components/profile/ActivityInfo";
import { ContactInfo } from "@/components/profile/ContactInfo";
import { StaffList } from "@/components/profile/StaffList";
import { RelatedPeople } from "@/components/profile/RelatedPeople";
// データ切り替え用: 以下のどちらかをコメントアウトして使用
//import { sampleTalentProfile } from "@/data";           // フルデータ版
import { sampleTalentProfile } from "@/data/index_empty"; // 空データ版（テスト用）

export default function TalentProfilePage() {
  const profile = sampleTalentProfile;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-[160px]">
        <ProfileHeader name={profile.name} skillTags={profile.skillTags} />
      </div>

      <div className="grid grid-cols-3 gap-4 p-8 min-h-[calc(100vh-160px)] max-h-[calc(100vh-160px)]">
        {/* Left Column - Widest */}
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="row-span-3">
            <CareerInfo
              currentInfo={profile.currentInfo}
              pastBusinessCards={profile.pastBusinessCards}
            />
          </div>
          <div className="row-span-9">
            <Summary records={profile.interviewRecords} />
          </div>
        </div>

        {/* Middle Column - Activity Information */}
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="row-span-12">
            <ActivityInfo activities={profile.activities} />
          </div>
        </div>

        {/* Right Column - Narrowest */}
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="row-span-2">
            <ContactInfo
              email={profile.contactInfo.email}
              phone={profile.contactInfo.phone}
            />
          </div>
          <div className="row-span-5">
            <StaffList staff={profile.contactStaff} />
          </div>
          <div className="row-span-5">
            <RelatedPeople people={profile.relatedPeople} />
          </div>
        </div>
      </div>
    </div>
  );
}
