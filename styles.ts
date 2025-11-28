const styles = StyleSheet.create({
  // ... (احتفظ بالأنماط القديمة مثل container و headerText)
  
  // أنماط جديدة لـ FlatList والبطاقات
  listContainer: {
    paddingBottom: 20, // لترك مسافة أسفل القائمة
    width: '100%',
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1a75ff', // شريط أزرق جانبي
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseDetail: {
    fontSize: 14,
    color: '#666',
  },
  courseDetailFooter: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    marginTop: 5,
  },
  // ... (باقي الأنماط القديمة)
});

