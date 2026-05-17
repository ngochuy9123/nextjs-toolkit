// Lớp cơ sở (Base Class) định nghĩa cấu trúc chung cho mọi lỗi của ứng dụng
export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Khôi phục prototype chain để toán tử 'instanceof' hoạt động chính xác
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;

    // Ghi lại Stack Trace tĩnh của V8 Engine
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Các lớp dẫn xuất (Derived Classes) đa hình
export class UnauthorizedError extends AppError {
  constructor(
    message = "Phiên đăng nhập hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại.",
  ) {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message = "Bạn không có quyền truy cập tài nguyên hoặc thực thi hành động này.",
  ) {
    super(message, 403);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Lỗi hệ thống máy chủ. Đang tiến hành khôi phục.") {
    super(message, 500);
  }
}
