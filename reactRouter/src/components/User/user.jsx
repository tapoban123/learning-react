import { useParams } from "react-router";

function User() {
  const { userId } = useParams();
  return (
    <h1 className="bg-gray-600 text-3xl text-white text-center p-5">
      User: {userId}
    </h1>
  );
}

export default User;
