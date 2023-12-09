import Landing from "@/components/LandingPage";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
export default function App() {
  return (
    <>
      <Landing />
    </>
  );
}
