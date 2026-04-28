export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");

  if (!(cleaned.length >= 10 && cleaned.length <= 11)) return false;

  if (cleaned.length === 11 && parseInt(cleaned.substring(2, 3)) !== 9)
    return false;

  for (let n = 0; n < 10; n++) {
    if (
      cleaned === new Array(11).join(n.toString()) ||
      cleaned === new Array(12).join(n.toString())
    ) {
      return false;
    }
  }

  return true;
};
