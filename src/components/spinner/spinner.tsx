function Spinner(): JSX.Element {
  return (
    <div className='spinner-wrapper'>
      <div className='spinner' />
      <p className='spinner-text'>Loading...</p>
    </div>
  );
}

export default Spinner;
