const useContactListVM = () => ({
  contacts: [
    {
      key: 1,
      picture: 'http://placekitten.com/64/64',
      name: 'Lincoln Anderson',
      email: 'lincolnanderson@gmail.com',
      mailto: 'mailto:lincolnanderson@gmail.com',
    },
    {
      key: 2,
      picture: 'http://placekitten.com/64/64',
      name: 'Eran Schoellhorn',
      email: 'eran@gmail.com',
      mailto: 'mailto:eran@gmail.com',
    },
  ],
});

export default useContactListVM;
