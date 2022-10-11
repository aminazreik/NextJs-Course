import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        titles: 'A First Meetup',
        image: 'https://miro.medium.com/max/1400/0*Pda-bVNC-MxE-ZJ2.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        titles: 'A First Meetup',
        image: 'https://miro.medium.com/max/1400/0*Er9Fs3z0--gXfN0D.jpg',
        address: 'Some address 6, 12345 Some City',
        description: 'This is a fsecond meetup!'
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;