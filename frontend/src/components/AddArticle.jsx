import { useForm } from "react-hook-form"

export default function AddArticle(){

  const {register,handleSubmit,formState:{errors}}=useForm()

  const onSubmit=(data)=>{
    console.log(data)
  }

  return(

  <div className="flex justify-center items-center min-h-screen bg-gray-100">

    <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
    >

      <h2 className="text-2xl font-semibold text-center mb-6">
      Add Article
      </h2>

      {/* Title */}

      <div className="mb-4">

        <input
        placeholder="Title"
        className="border p-2 rounded w-full"
        {...register("title",{required:"Title required"})}
        />

        <p className="text-red-500 text-sm">
        {errors.title?.message}
        </p>

      </div>

      {/* Category */}

      <div className="mb-4">

        <select
        className="border p-2 rounded w-full"
        {...register("category",{required:"Select category"})}
        >

          <option value="">Select Category</option>
          <option>Technology</option>
          <option>Education</option>
          <option>Health</option>

        </select>

        <p className="text-red-500 text-sm">
        {errors.category?.message}
        </p>

      </div>

      {/* Content */}

      <div className="mb-6">

        <textarea
        placeholder="Write article content..."
        className="border p-2 rounded w-full h-40"
        {...register("content",{
          required:"Content required",
          minLength:{
            value:20,
            message:"Article must be at least 20 characters"
          }
        })}
        />

        <p className="text-red-500 text-sm">
        {errors.content?.message}
        </p>

      </div>

      <button
      type="submit"
      className="bg-purple-500 hover:bg-purple-600 text-white w-full p-2 rounded"
      >
      Publish Article
      </button>

    </form>

  </div>

  )
}