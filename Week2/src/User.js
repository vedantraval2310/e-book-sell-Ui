import React from "react";

const User = ({ a, userId }) => {
  //   const { a, userId } = props;

  //   const a = props.a;
  //   const userId = props.userId;

  return (
    <>
      <div>User component</div>
      <div>User Name {a}</div>
      <div>User Id {userId}</div>
    </>
  );
};

export default User;
