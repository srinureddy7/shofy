import { Navbar } from "@/components/navbar";
import { ProductList } from "@/components/products";
import { decrement, increment, selectValue } from "@/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <section>
      <html className="h-full bg-gray-100">
        <body className="h-full">
          <Navbar>
            <ProductList />
          </Navbar>
        </body>
      </html>
    </section>
  );
}
