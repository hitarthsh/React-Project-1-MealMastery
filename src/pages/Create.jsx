import { nanoid } from "nanoid/non-secure";
import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
      />
      <small className="text-red-400">This is how the error is show</small>

      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Recipe Title"
      />

      <textarea
        className="block border-b outline-0 p-2"
        {...register("description")}
        placeholder="//Start from here"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingredients")}
        placeholder="//Write ingredients seperated by comma"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("instruction")}
        placeholder="//Write instruction seperated by comma"
      ></textarea>

      <select
        className="block border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
