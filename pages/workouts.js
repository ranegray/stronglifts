export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Workouts = (props) => {
  return (
    <>
      <header>
        <h1>STRONGLIFTS</h1>
      </header>
      <nav></nav>
    </>
  );
};

export default Workouts;
