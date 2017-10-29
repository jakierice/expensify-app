import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

// setStartDate
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// setEndDate
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

// setTextFilter with value
test('should set text filter to specified value', () => {
  const text = 'Some Text Value';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
});

// setTextFilter without value
test('should set text filter to default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// sortByDate
test('should setup sort by date action', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// sortByAmount
test('should setup sort by amount action', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
