import { Card } from 'antd';

const { Meta } = Card;

export const UserProfileCard = ({ user }) => {

    const {
        id,
        name,
        email,
        phone,
        website,
        imgUrl,
        company = { name },
        address = { street, suite, city, zipcode }
    } = user;

    console.log('User details:', address);

    return (

        <Card
            key={id}
            className="min-h-[220px] border flex p-2.5 shadow-lg flex-col sm:flex-row items-center sm:items-start"
            style={{ border: '1px solid #e8e8e8', borderRadius: 0 }}
            cover={
                <div className='user-img flex! justify-center items-center bg-[#f5f5f5] min-w-[200px] h-full overflow-hidden' style={{ border: '1px solid #e8e8e8', borderRadius: 0 }}>
                    <img alt="example"
                        src={imgUrl}
                        lassName="user-img flex justify-center items-center bg-[#f5f5f5] overflow-hidden rounded-none border border-[#e8e8e8]"
                    />
                </div>
            }
        >
            <Meta
                title={<span style={{ fontSize: '2rem' }}>{name}</span>}
                description={
                    <div className='user-details text-black'>

                        <div className='info-1 flex items-center gap-2 mb-1 text-[16px]'>
                            <span className='font-bold'>Email:</span>
                            {email}
                        </div>
                        <div className='info-1 flex items-center gap-2 mb-1 text-[16px]'>
                            <span className='font-bold'> Phone: </span>
                            {phone}
                        </div>
                        <div className='info-1 flex items-center gap-2 mb-1 text-[16px]'>
                            <span className='font-bold'>Company: </span>
                            {company.name}
                        </div>
                        <div className='info-1 flex items-center gap-2 mb-1 text-[16px]'>
                            <span className='font-bold'>Website: </span>
                            {website}
                        </div>
                        <div className='info-1 flex items-center gap-2 mb-1 text-[16px]'>
                            <span className='font-bold'>Address: </span>
                            {address.street}, {address.suite}, {address.city} - {address.zipcode}
                        </div>
                    </div>
                }
            />
        </Card>
    )
}