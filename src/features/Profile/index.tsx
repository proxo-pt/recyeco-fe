import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import UserCard from './sections/UserCard';
import UserForm from './sections/UserForm';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container grid xl:grid-cols-4 grid-cols-1 xl:gap-4 gap-y-4 py-4">
          <UserCard />
          <UserForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
