// import userImage from '../assets/mee.jpg'

export default function Hero() {

    return (
        <section className='flex justify-center items-center space-x-4 flex-grow'>
            <img
                className='overflow-hidden rounded-full w-48 h-48 object-cover'
                src="https://img.freepik.com/premium-vector/children-portrait-cartoon-vector-illustration_723224-2901.jpg?w=740" alt="profile image"
            />
            <div className='grid gap-2'>
                <p className='text-lg font-semibold'>Hello there!</p>
                <p className='text-3xl font-bold'>I'm <span className='text-action'>Saurav</span></p>
                <p className='text-xl font-semibold'>A computer Engineering Student</p>
                <div>
                    <a href="https://www.github.com/sauravkhanal"><i className="fa-brands fa-github  fa-xl"></i></a>
                    <a href="https://www.linkedin.com/sauravkhanal"><i className="fa-brands fa-linkedin mx-2 fa-xl"></i></a>
                </div>
            </div>
        </section>
    )
}