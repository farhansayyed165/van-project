import React from "react"
import useAuth from "../../hooks/useAuth"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {
    const location = useLocation()
    const van = useLoaderData()[0]
    const { auth } = useAuth()
    const search = location.state?.search || "";
    const type = location.state?.type || "all";


    return (
        <div className="mt-10 van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            <div className="lg:flex-row gap-6 flex-col van-detail">
                <img className="lg:w-3/4 w-full" src={van.image} />
                <div className="lg:my-[57px]">
                    <i className={`van-type ${van.type} selected mb-5`}>
                        {van.type}
                    </i>
                    <h2 className="mt-8">{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className="lg:w-3/4">{van.details}</p>
                    {van.userid == auth.userid ? 
                    <Link to={`/host/vans/${van.vanid}`}> <button className="stat-button mt-8"> See Stats</button> </Link>
                    :
                    <button className="link-button mt-8">Rent this van</button>
                    }

                </div>
            </div>

        </div>
    )
}