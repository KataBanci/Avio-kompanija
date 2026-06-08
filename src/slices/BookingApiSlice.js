import { BOOKINGS_URL, PAYPAL_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const bookingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (booking) => ({
        url: BOOKINGS_URL,
        method: 'POST',
        body: booking,
      }),
    }),

    getBookingDetails: builder.query({
      query: (bookingId) => ({
        url: `${BOOKINGS_URL}/${bookingId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    payBooking: builder.mutation({
      query: ({ bookingId, details }) => ({
        url: `${BOOKINGS_URL}/${bookingId}/pay`,
        method: 'PUT',
        body: details,
      }),
    }),

    getMyBookings: builder.query({
      query: () => ({
        url: `${BOOKINGS_URL}/mybookings`,
      }),
      keepUnusedDataFor: 5,
    }),

    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const {
  useCreateBookingMutation,
  useGetBookingDetailsQuery,
  usePayBookingMutation,
  useGetMyBookingsQuery,
  useGetPaypalClientIdQuery,
} = bookingsApiSlice