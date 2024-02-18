import { Home, Admin, ProductList, ProductDetail, Contact, ContactNp, ContactEu, ContactUs, PageNotFound } from "../pages"
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    const user = false

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductList />} />
                {/* :id, is basically a dynamic value we are giving so we can do products/1001 or 1002 or etc.. */}
                {/* Similarly, we can have multiple dynamic values like: products/:name/:id etc..*/}
                <Route path="products/:id" element={<ProductDetail />} />

                {/* This is a nexted routing. When we try to access "contact" we are routed to <Contact /> component.
           But when we do: contact/np or contact/eu or contact/us, we will have <Contact/> element on top page and
           ContactNp or ContactEu or ContactUs component on the bottom. This allows us to reuse single Contact component.
           Note in the Contact component to make the nested components to show up, we must use: Outlet
           Then the ContactNp or Eu or Us will replace the <Outlet/> component in the Contact component.*/}
                <Route path="contact" element={<Contact />}>
                    <Route path="np" element={<ContactNp />} />
                    <Route path="eu" element={<ContactEu />} />
                    <Route path="us" element={<ContactUs />} />
                </Route>

                <Route path="/admin" element={user ? <Admin /> : <PageNotFound />} />
                {/* When all paths matches, we will trigger Page not found! */}
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}
