
const phoneNumber = "6287718035531";

export function bookingWhatsApp(roomName: string) {
  const message = `Hello, I am interested in booking ${roomName} at Barès. Could you provide more information about availability?`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
