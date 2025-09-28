import React from 'react'
import ProfileCard from './_sections/profile-card'
import PersonalInformationActivity from './_sections/personal-information-activity'
import ProfileStats from './_sections/profile-stats'
import CoursePackageStatus from './_sections/course-package-status'
import AccountControl from './_sections/account-control'

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Profile Card */}
      <ProfileCard />

      {/* Personal Information And Activity Summary */}
      <PersonalInformationActivity />

      {/* Profile Stats */}
      <ProfileStats />

      {/* Course Package Status */}
      <CoursePackageStatus />

      {/* Account Control */}
      <AccountControl />
    </>
  )
}

export default Dashboard