import { useLocation } from "react-router";

export default function ArticlePage(){

  const location = useLocation();
  const article = location.state;

  return(

    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-4">
        Category: {article.category}
      </p>

      <p className="text-lg">
        {article.content}
      </p>

    </div>

  )
}