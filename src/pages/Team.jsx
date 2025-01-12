import React from 'react'
import Container from '../components/Container'
import CreativeTeamMember from '../components/CreativeTeamMember';

const Team = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            Team
          </h1>
        </div>
      </div>
      <CreativeTeamMember />
    </>
  );
}

export default Team
