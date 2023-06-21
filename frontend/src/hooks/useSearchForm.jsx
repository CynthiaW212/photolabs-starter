import { useState } from "react";

export default function useSearchForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData(initialValues);
  };

  return { formData, handleChange, handleSubmit };
}