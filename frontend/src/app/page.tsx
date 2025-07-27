import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { CareerInfo } from "@/components/profile/CareerInfo";
import { Summary } from "@/components/profile/Summary";
import { ActivityInfo } from "@/components/profile/ActivityInfo";
import { ContactInfo } from "@/components/profile/ContactInfo";
import { StaffList } from "@/components/profile/StaffList";
import { RelatedPeople } from "@/components/profile/RelatedPeople";
import { sampleTalentProfile } from "@/data";

export default function TalentProfilePage() {
  const profile = sampleTalentProfile;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-[160px]">
        <ProfileHeader name={profile.name} skillTags={profile.skillTags} />
      </div>
      <div className="p-8 h-full">
        <div className="grid grid-cols-3 gap-4 min-h-[calc(100vh-160px)]">
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
    </div>
  );
}
