import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Create = (props) => {
  const { task, settask } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    const newTask = {
      title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
      id: nanoid(),
      isCompleted: false,
    };
    settask([...task, newTask]);
    reset();
    console.log(newTask)
  };

  const deleteAll = () => {
    settask([]);
  };

  return (
    <form
      className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        className="bg-gray-700 text-white px-4 py-2 rounded-md w-full md:w-1/3"
        {...register("title", { required: true })}
        type="text"
        placeholder="Enter your task"
      />
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
        Add Task
      </button>
      <button
        type="button"
        onClick={deleteAll}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Delete All Tasks
      </button>
      {errors.title && (
        <p className="text-red-400 text-sm mt-2 text-center w-full">
          Task title is required
        </p>
      )}
    </form>
  );
};

export default Create;
