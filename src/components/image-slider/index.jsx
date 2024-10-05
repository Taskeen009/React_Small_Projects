import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

const Slider = ({ url, Limit = 5, page = 1 }) => {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errormsg, setErrormsg] = useState(null);
    const [loading, setLoading] = useState(false);

    

    async function FetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${Limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }
        }
        catch (e) {
            setErrormsg(e.message)
            setLoading(false)
        }
    }


    const handleprev=()=>{
      setCurrentSlide(currentSlide===0?images.length-1:currentSlide-1)
    }

    const handlenext=()=>{
        setCurrentSlide(currentSlide===images.length-1?0:currentSlide+1)
    }
    useEffect(() => {
        if (url !== '')
            FetchImages(url)
    }, [url])


    console.log(images)

    if (loading) {
        return <div>loading data !pls wait</div>
    }

    if (errormsg !== null) {
        return <div>error occured</div>
    }
    return <div className="container">
        <BsArrowLeftCircleFill  onClick={handleprev}className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((item) => {
                    return <img
                        key={item.id}
                        alt={item.download_url}
                        src={item.download_url}
                        className={currentSlide===index? :""}
                    />
                }) : null

        }

        <BsArrowRightCircleFill onClick={handlenext} className="arrow arrow-right"/>
        <span className="circle-indicators">
            {
                images && images.length ?
                images.map((item) => {
                    return <img
                        key={item.id}
                        alt={item.download_url}
                        src={item.download_url}
                        className="current-indicator"
                    />
                }) : null
            }
        </span>
    </div>
}

export default Slider;