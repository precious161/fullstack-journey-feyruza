import { describe, it, expect } from 'vitest';
import { ValidateData } from '../src/lib/validator.js';
import type { DataPackage } from '../src/types.js';

describe('Data Validator Logic', () => {

  // 1. Valid File Test

  it('should return no errors for valid data', () => {
    const validData: DataPackage = {
      users: [
        { id: 1, name: "Mentor", email: "mentor@test.com", role: "admin", createdAt: "2026-01-01" }
      ],
      orders: [
        { id: 101, userId: 1, amount: 50, status: "Paid", createdAt: "2026-01-02" }
      ]
    };

    const errors = ValidateData(validData);
    expect(errors.length).toBe(0);
  });

  // 2. Invalid User Test

  it('should catch an invalid email format', () => {
    const invalidUserData: DataPackage = {
      users: [{ id: 1, name: "Tester", email: "broken-email-format", role: "user", createdAt: "2026-01-01" }],
      orders: []
    };

    const errors = ValidateData(invalidUserData);
    expect(errors).toContain("User with id of 1 has invalid email!");
  });

  // 3. Invalid Order Test

  it('should catch an invalid order status', () => {
    const invalidOrderData: DataPackage = {
      users: [{ id: 1, name: "Tester", email: "test@test.com", role: "user", createdAt: "2026-01-01" }],
      orders: [{ id: 101, userId: 1, amount: 20, status: "Shipped" as any, createdAt: "2026-01-01" }]
    };

    const errors = ValidateData(invalidOrderData);
    expect(errors[0]).toContain("invalid status");
  });

  // 4. Broken Referential Integrity Test

  it('should catch an order pointing to a non-existent user', () => {
    const badUserData: DataPackage = {
      users: [{ id: 1, name: "Real User", email: "test@test.com", role: "user", createdAt: "2026-01-01" }],
      orders: [{ id: 101, userId: 999, amount: 100, status: "Pending", createdAt: "2026-01-01" }]
    };

    const errors = ValidateData(badUserData);
    expect(errors[0]).toContain("user id of 999");
    expect(errors[0]).toContain("doesn't exist");
  });

  // 5. Mixed Case (Both Valid and Invalid)

  it('should report specific errors while ignoring valid entries', () => {
    const mixedData: DataPackage = {
      users: [
        { id: 1, name: "Good User", email: "valid@test.com", role: "admin", createdAt: "2026-01-01" },
        { id: 2, name: "Bad User", email: "invalid-email", role: "user", createdAt: "2026-01-01" }
      ],
      orders: [
        { id: 101, userId: 1, amount: 50, status: "Paid", createdAt: "2026-01-01" },
        { id: 102, userId: 500, amount: 10, status: "Paid", createdAt: "2026-01-01" }
      ]
    };

    const errors = ValidateData(mixedData);
    expect(errors.length).toBe(2);
    expect(errors.some(e => e.includes("id of 2 has invalid email"))).toBe(true);
    expect(errors.some(e => e.includes("user id of 500"))).toBe(true);
  });

});