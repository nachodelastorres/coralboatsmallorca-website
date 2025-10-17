import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  tour: ITourDT | null;
  checkIn: string | null;
  adultTickets: number;
  kidTickets: number;
  childTickets: number;
  additionalGuide: boolean;
  internet: boolean;
  photography: boolean;
  totalCost: number; // New property
  isBookingClicked: boolean;
}

const initialState: BookingState = {
  tour: null,
  checkIn: null,
  adultTickets: 1,
  kidTickets: 0,
  childTickets: 0,
  additionalGuide: false,
  internet: false,
  photography: false,
  totalCost: 0, // Initialize to 0
  isBookingClicked: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setTour: (state, action: PayloadAction<ITourDT>) => {
      state.tour = action.payload;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate when tour is set
    },
    setCheckIn: (state, action: PayloadAction<string | null>) => {
      state.checkIn = action.payload;
    },
    setAdultTickets: (state, action: PayloadAction<number>) => {
      state.adultTickets = action.payload;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on change
    },
    setKidTickets: (state, action: PayloadAction<number>) => {
      state.kidTickets = action.payload;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on change
    },
    setChildTickets: (state, action: PayloadAction<number>) => {
      state.childTickets = action.payload;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on change
    },
    toggleAdditionalGuide: (state) => {
      state.additionalGuide = !state.additionalGuide;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on toggle
    },
    toggleInternet: (state) => {
      state.internet = !state.internet;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on toggle
    },
    togglePhotography: (state) => {
      state.photography = !state.photography;
      bookingSlice.caseReducers.calculateTotalCost(state); // Recalculate on toggle
    },
    calculateTotalCost: (state) => {
      const ticketPrice = Math.round(updatePrice(state.tour as ITourDT)); // Use tour price
      const serviceCost = 120; // Example service cost

      // Calculate total based on ticket counts and selected options
      state.totalCost =
        (state.adultTickets + state.kidTickets + state.childTickets) *
          ticketPrice +
        (state.additionalGuide ? serviceCost : 0) +
        (state.internet ? serviceCost : 0) +
        (state.photography ? serviceCost : 0);
    },
    setIsBookingClicked: (state) => {
      state.isBookingClicked = true;
    },
  },
});

export const {
  setTour,
  setCheckIn,
  setAdultTickets,
  setKidTickets,
  setChildTickets,
  toggleAdditionalGuide,
  toggleInternet,
  togglePhotography,
  calculateTotalCost,
  setIsBookingClicked,
} = bookingSlice.actions;

export default bookingSlice.reducer;
