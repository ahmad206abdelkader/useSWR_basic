function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideprops(contecxt) {
  const { params } = contecxt;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
