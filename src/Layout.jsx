const Header =()=>{
   return <h1>Smart tech blog</h1>
};
const Footer=()=>{
    return <p>amiira@2026</p>
};

const POST  = () => {
  return(
  <p>because we are the best</p>)
};

const Blog=()=>{

   return (
    <div>
      <Header />
      <main>
        <POST />
      </main>
      <Footer />
    </div>
  );
};
export default Blog;