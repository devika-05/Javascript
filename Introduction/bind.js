

// function logMessage(message) {
//   console.log(`[${this.module}] ${message}`);
// }

// // Module objects
// // const authModule = { module: "Auth" };
// // const paymentModule = { module: "Payment" };

// const authLogger = logMessage.bind({ module: "Auth" });
// const paymentLogger = logMessage.bind({ module: "Payment" });

// // TODO: Use authLogger and paymentLogger to log messages
// authLogger("User login successful");
// paymentLogger("Payment processed");


function departmentLogger(message) {
  console.log(`[${this.department}] ${message}`);
}

const hr = { department: "HR" };
const engineering = { department: "Engineering" };
const marketing = { department: "Marketing" };

// Your task:
// 1. Create loggers for each department using .bind()
const hrLogger = departmentLogger.bind(hr);
const engineeringLogger = departmentLogger.bind(engineering);
const marketingLogger = departmentLogger.bind(marketing);

// 2. Use each logger to print a unique message
hrLogger("HR");
engineeringLogger("Engineering");
marketingLogger("Marketing");