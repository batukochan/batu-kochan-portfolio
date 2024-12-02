export interface Colors {
  gray50:string,
  gray100:string,
  gray200:string,
  gray300:string,
  gray400:string,
  gray500:string,
  gray600:string,
  gray700:string,
  gray800:string,
  gray900:string,
  gray950:string,
  background: string;
  buttonBackground: string;
  buttonText:string;
  text: string;
  iconColor: string, 
  iconStroke:string,
  border: string;
}

export const lightColors: Colors = {
  gray50:"#f9fafb",
  gray100:"#f3f4f6",
  gray200:"#e5e7eb",
  gray300:"#d1d5db",
  gray400:"#9ca3af",
  gray500:"#6b7280",
  gray600:"#4b5563",
  gray700:"#374151",
  gray800:"#1f2937",
  gray900:"#111827",
  gray950:"#030712",
  background: "#ffffff",
  buttonBackground:"#030712",
  buttonText:"#f9fafb",
  text: "#111827",
  iconColor: "none", 
  iconStroke:"#030712",
  border: "#e5e7eb",
};

export const darkColors: Colors = {
  gray50:"#111827",
  gray100:"#1f2937",
  gray200:"#374151",
  gray300:"#4b5563",
  gray400:"#6b7280",
  gray500:"#9ca3af",
  gray600:"#d1d5db",
  gray700:"#e5e7eb",
  gray800:"#f3f4f6",
  gray900:"#f9fafb",
  gray950:"#ffffff",
  background: "#030712",
  buttonBackground:"#ffffff",
  buttonText:"#111827",
  text: "#f9fafb",
  iconColor: "#none", 
  iconStroke:"#f9fafb",
  border: "#374151",
};
