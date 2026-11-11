const phoneNumber = "6287718035531";

export function bookingWhatsApp(roomName?: string) {
  const message = roomName
    ? `Hello, I am interested in booking ${roomName} at Barès. Could you provide more information about availability?`
    : "Hello, I am interested in staying at Barès. Could you provide more information about your rooms and availability?";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}