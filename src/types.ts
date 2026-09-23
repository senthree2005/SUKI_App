export type StockState = 'in' | 'low' | 'sold';

export interface Product {
  id: string;
  name: string;
  localName?: string;
  price: number;
  originalPrice?: number;
  unit: string;
  stall: string;
  vendorName: string;
  vendorId: string;
  image: string;
  stockState: StockState;
  stockRemaining?: string;
  isLiveSpecial?: boolean;
  category: string;
  tag?: string;
  description?: string;
}

export interface LiveVendor {
  id: string;
  name: string;
  stall: string;
  category: string;
  image: string;
  avatar: string;
  viewers: number;
  likes: number;
  liveCatchphrase: string;
  streamImage: string;
  pinnedProduct: Product;
  isLive: boolean;
  scheduleTime?: string;
}

export interface StreetFoodVendor {
  id: string;
  name: string;
  rating: number;
  distance: string;
  location: string;
  minPrice: number;
  image: string;
  items: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerAddress: string;
  items: CartItem[];
  totalPrice: number;
  status: 'preparing' | 'ready' | 'delivering' | 'delivered';
  driver: {
    name: string;
    vehicle: string;
    etaMinutes: number;
    phone: string;
  };
  specialInstructions?: string;
  paymentMethod: 'COD' | 'GCash';
  createdAt: string;
}

export interface LiveChatMessage {
  id: string;
  sender: string;
  text: string;
  isHost?: boolean;
  isYou?: boolean;
  isPurchaseNotice?: boolean;
  timestamp: string;
}

export interface SukiCustomer {
  id: string;
  name: string;
  phone: string;
  tier: 'Diamond Suki' | 'Gold Suki' | 'Regular Suki';
  totalOrders: number;
  totalSpent: number;
  favoriteItems: string[];
  outstandingBalance: number;
  lastOrdered: string;
  notes: string;
}
