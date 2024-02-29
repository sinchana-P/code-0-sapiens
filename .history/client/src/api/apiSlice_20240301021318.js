import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
       reducerPath:"api",
       baseQuery:fetchBaseQuery({baseUrl:"http://localhost:300"}),
       tagTypes:['auth', 'student'],
       endpoints:(builder)=>({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: "POST",
                body: data
            }),
            invalidatesTags:['auth']
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            invalidatesTags:['auth']
        }),
            //   getTodos:builder.query({
            //          query:()=>'/auth',
            //          transformResponse: (res: Todo[]) =>  {
            //                 // Ensure res is an array before sorting
            //                 console.log(res);
                            
            //                 if (Array.isArray(res)) {
            //                     return res.sort((a, b) => b.id - a.id);
            //                 } else {
            //                     return res;
            //                 }
            //             },
                    
            //          providesTags:['todos']
            //   }),
            //   addTodo:builder.mutation({
            //          query:(todo)=>({
            //                 url:'/todos',
            //                 method:"POST",
            //                 body:todo
            //          }),
            //          invalidatesTags:['todos']
            //   }),
            //   updateTodo:builder.mutation({
            //          query:(todo)=>({
            //                 url:/todos/${todo.id},
            //                 method:'PATCH',
            //                 body:todo
            //          }),
            //          invalidatesTags:['todos']
            //   }),
            //   deleteTodo:builder.mutation({
            //          query:(id)=>({
                           
            //                 url:/todos/${id},
            //                 method:'DELETE',
            //                 body:id
            //          }),
            //          invalidatesTags:['todos']
            //   })

       })
})     

export const { useRegisterMutation,useLoginMutation } = apiSlice