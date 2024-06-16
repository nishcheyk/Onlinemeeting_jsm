"use client";
import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isSchedulMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting=()=>{

  }

  return (
<section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handelClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-layout-5"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recording"
        description="Check out your recordings"
        handelClick={() => router.push('/recordings')}
        className="bg-layout-4"
      />

      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handelClick={() => setMeetingState
          ("isSchedulMeeting")}
        className="bg-layout-1"
      />

      <HomeCard
        img="/icons/add-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handelClick={() => setMeetingState
        ("isJoiningMeeting")}
        className="bg-layout-3"
      />
      <MeetingModal
      isOpen={meetingState==='isInstantMeeting'}
      onClose={()=> setMeetingState(undefined)}
      title="Start an Instant Meeting"
      className="text-center"
      buttonText=" Start Meeting"
      handleClick= {createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
