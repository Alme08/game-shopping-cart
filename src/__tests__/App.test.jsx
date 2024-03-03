import {
	startOfYear,
	endOfYear,
	startOfMonth,
	subMonths,
	addDays,
	format,
} from 'date-fns';
import { test } from 'vitest';

describe('Utility Function Tests', () => {
	test('format should format the date according to the specified format', () => {
		const date = new Date('2024/03/01');
		expect(format(date, 'yyyy-MM-dd')).toEqual('2024-03-01');
	});
	test('startOfYear should return the start of the year', () => {
		const date = new Date('2024/03/01');
		expect(format(startOfYear(date), 'yyyy-MM-dd')).toEqual('2024-01-01');
	});

	test('endOfYear should return the end of the year', () => {
		const date = new Date('2024/03/01');
		expect(format(endOfYear(date), 'yyyy-MM-dd')).toEqual('2024-12-31');
	});

	test('startOfMonth should return the start of the month', () => {
		const date = new Date('2024/03/12');
		expect(format(startOfMonth(date), 'yyyy-MM-dd')).toEqual('2024-03-01');
	});

	test('subMonths should subtract the specified number of months', () => {
		const date = new Date('2024/07/15');
		expect(format(subMonths(date, 3), 'yyyy-MM-dd')).toEqual('2024-04-15');
	});

	test('nextDay should return the next day', () => {
		const date = new Date('2024/05/10');
		expect(format(addDays(date, 1), 'dd-MM-yyyy')).toEqual('11-05-2024');
	});

	test('Start of the past month', () => {
		const date = new Date('2024/05/10');
		expect(format(startOfMonth(subMonths(date, 1)), 'yyyy-MM-dd')).toEqual(
			'2024-04-01'
		);
	});
});

