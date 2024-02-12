const ItemNews = ({ params }: { params: { newsitemid: string } }) => {
  return <h2>Information about new {params.newsitemid}</h2>;
};
export default ItemNews;
