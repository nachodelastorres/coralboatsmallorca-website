'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMsg from '../error-msg';

interface FormData {
  firstName: string;
  lastName: string;
  reviewTitle: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('Your First Name is required'),
  lastName: yup.string().required('Your Last Name is required'),
  reviewTitle: yup.string().required('Review Title is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const TourReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-xl-6 col-lg-6 mb-20">
          <div className="it-discover-review-input">
            <input
              type="text"
              placeholder="first name:"
              {...register('firstName')}
            />
            <ErrorMsg msg={errors.firstName?.message || ''} />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 mb-20">
          <div className="it-discover-review-input">
            <input
              type="text"
              placeholder="last name:"
              {...register('lastName')}
            />
            <ErrorMsg msg={errors.lastName?.message || ''} />
          </div>
        </div>
      </div>
      <div className="it-discover-review-input mb-20">
        <input
          type="text"
          placeholder="Review title"
          {...register('reviewTitle')}
        />
        <ErrorMsg msg={errors.reviewTitle?.message || ''} />
      </div>
      <textarea
        placeholder="Write a Message"
        cols={30}
        rows={10}
        {...register('message')}
      ></textarea>
      <ErrorMsg msg={errors.message?.message || ''} />
      <button type="submit" className="it-btn-primary mt-20">
        Submit comment
      </button>
    </form>
  );
};
export default TourReviewForm;
